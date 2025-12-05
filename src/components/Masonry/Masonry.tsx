import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
    const get = () => values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;

    const [value, setValue] = useState<number>(get);

    useEffect(() => {
        const handler = () => setValue(get);
        queries.forEach(q => matchMedia(q).addEventListener('change', handler));
        return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler));
    }, [queries]);

    return value;
};

const useMeasure = <T extends HTMLElement>() => {
    const ref = useRef<T | null>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (!ref.current) return;
        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setSize({ width, height });
        });
        ro.observe(ref.current);
        return () => ro.disconnect();
    }, []);

    return [ref, size] as const;
};

const preloadImages = async (urls: string[]): Promise<void> => {
    await Promise.all(
        urls.map(
            src =>
                new Promise<void>(resolve => {
                    const img = new Image();
                    img.src = src;
                    img.onload = img.onerror = () => resolve();
                })
        )
    );
};

interface Item {
    id: string;
    img: string;
    url: string;
    height: number;
}

interface GridItem extends Item {
    x: number;
    y: number;
    w: number;
    h: number;
}

interface MasonryProps {
    items: Item[];
    ease?: string;
    duration?: number;
    stagger?: number;
    animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random';
    scaleOnHover?: boolean;
    hoverScale?: number;
    blurToFocus?: boolean;
    colorShiftOnHover?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({
    items,
    ease = 'power3.out',
    duration = 0.6,
    stagger = 0.05,
    animateFrom = 'bottom',
    scaleOnHover = true,
    hoverScale = 0.95,
    blurToFocus = true,
    colorShiftOnHover = false
}) => {
    const columns = useMedia(
        ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
        [5, 4, 3, 2],
        1
    );

    const [containerRef, { width }] = useMeasure<HTMLDivElement>();
    const [imagesReady, setImagesReady] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const getInitialPosition = (item: GridItem) => {
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (!containerRect) return { x: item.x, y: item.y };

        let direction = animateFrom;
        if (animateFrom === 'random') {
            const dirs = ['top', 'bottom', 'left', 'right'];
            direction = dirs[Math.floor(Math.random() * dirs.length)] as typeof animateFrom;
        }

        switch (direction) {
            case 'top':
                return { x: item.x, y: -200 };
            case 'bottom':
                return { x: item.x, y: window.innerHeight + 200 };
            case 'left':
                return { x: -200, y: item.y };
            case 'right':
                return { x: window.innerWidth + 200, y: item.y };
            case 'center':
                return {
                    x: containerRect.width / 2 - item.w / 2,
                    y: containerRect.height / 2 - item.h / 2
                };
            default:
                return { x: item.x, y: item.y + 100 };
        }
    };

    useEffect(() => {
        preloadImages(items.map(i => i.img)).then(() => setImagesReady(true));
    }, [items]);

    const grid = useMemo<GridItem[]>(() => {
        if (!width) return [];
        const colHeights = new Array(columns).fill(0);
        const gap = 16;
        const totalGaps = (columns - 1) * gap;
        const columnWidth = (width - totalGaps) / columns;

        return items.map(child => {
            const col = colHeights.indexOf(Math.min(...colHeights));
            const x = col * (columnWidth + gap);
            const height = child.height / 2;
            const y = colHeights[col];

            colHeights[col] += height + gap;
            return { ...child, x, y, w: columnWidth, h: height };
        });
    }, [columns, items, width]);

    const hasMounted = useRef(false);

    useLayoutEffect(() => {
        if (!imagesReady) return;

        grid.forEach((item, index) => {
            const selector = `[data-key="${item.id}"]`;
            const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

            if (!hasMounted.current) {
                const start = getInitialPosition(item);
                gsap.fromTo(
                    selector,
                    {
                        opacity: 0,
                        x: start.x,
                        y: start.y,
                        width: item.w,
                        height: item.h,
                        ...(blurToFocus && { filter: 'blur(10px)' })
                    },
                    {
                        opacity: 1,
                        ...animProps,
                        ...(blurToFocus && { filter: 'blur(0px)' }),
                        duration: 0.8,
                        ease: 'power3.out',
                        delay: index * stagger
                    }
                );
            } else {
                gsap.to(selector, {
                    ...animProps,
                    duration,
                    ease,
                    overwrite: 'auto'
                });
            }
        });

        hasMounted.current = true;
    }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

    const handleMouseEnter = (id: string, element: HTMLElement) => {
        if (scaleOnHover) {
            gsap.to(`[data-key="${id}"]`, {
                scale: hoverScale,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
        if (colorShiftOnHover) {
            const overlay = element.querySelector('.color-overlay') as HTMLElement;
            if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
        }
    };

    const handleMouseLeave = (id: string, element: HTMLElement) => {
        if (scaleOnHover) {
            gsap.to(`[data-key="${id}"]`, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
        if (colorShiftOnHover) {
            const overlay = element.querySelector('.color-overlay') as HTMLElement;
            if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
        }
    };

    const handleImageClick = (img: string, e: React.MouseEvent<HTMLDivElement>) => {
        const clickedElement = e.currentTarget;
        const rect = clickedElement.getBoundingClientRect();

        // Store original position for closing animation
        setSelectedImage(img);

        // Store the original tile position
        const originalPos = {
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height
        };

        // Pass original position to modal via data attribute
        setTimeout(() => {
            const modal = document.querySelector('.gallery-modal') as HTMLElement;
            if (modal) {
                modal.dataset.originalLeft = String(originalPos.left);
                modal.dataset.originalTop = String(originalPos.top);
                modal.dataset.originalWidth = String(originalPos.width);
                modal.dataset.originalHeight = String(originalPos.height);
            }
        }, 0);
    };

    const closeModal = () => {
        const modal = document.querySelector('.gallery-modal') as HTMLElement;
        const modalImage = document.querySelector('.gallery-modal-image') as HTMLElement;

        if (!modal || !modalImage) {
            setSelectedImage(null);
            return;
        }

        // Get original position from data attributes
        const originalLeft = parseFloat(modal.dataset.originalLeft || '0');
        const originalTop = parseFloat(modal.dataset.originalTop || '0');
        const originalWidth = parseFloat(modal.dataset.originalWidth || '0');
        const originalHeight = parseFloat(modal.dataset.originalHeight || '0');

        // Get current position
        const currentRect = modalImage.getBoundingClientRect();

        // Animate back to original position
        modalImage.style.transition = 'all 300ms ease-out';
        modalImage.style.transform = `translate(${originalLeft - currentRect.left}px, ${originalTop - currentRect.top}px) scale(${originalWidth / currentRect.width}, ${originalHeight / currentRect.height})`;
        modalImage.style.opacity = '0';

        // Fade out backdrop
        modal.style.opacity = '0';

        // Remove modal after animation
        setTimeout(() => {
            setSelectedImage(null);
        }, 300);
    };

    return (
        <>
            <div ref={containerRef} className="relative w-full h-full">
                {grid.map(item => (
                    <div
                        key={item.id}
                        data-key={item.id}
                        className="absolute box-content cursor-pointer"
                        style={{ willChange: 'transform, width, height, opacity' }}
                        onClick={(e) => handleImageClick(item.img, e)}
                        onMouseEnter={e => handleMouseEnter(item.id, e.currentTarget)}
                        onMouseLeave={e => handleMouseLeave(item.id, e.currentTarget)}
                    >
                        <div
                            className="relative w-full h-full bg-cover bg-center rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] uppercase text-[10px] leading-[10px]"
                            style={{ backgroundImage: `url(${item.img})` }}
                        >
                            {colorShiftOnHover && (
                                <div className="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className="gallery-modal fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl transition-opacity duration-300"
                    onClick={closeModal}
                    style={{ opacity: 1 }}
                >
                    <div className="relative max-w-7xl max-h-[90vh] p-4">
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 text-white hover:text-emerald-500 transition-colors duration-200 text-4xl font-light z-10"
                            aria-label="Close modal"
                        >
                            ×
                        </button>
                        <img
                            src={selectedImage}
                            alt="Gallery image"
                            className="gallery-modal-image max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                animation: 'modalFadeIn 300ms ease-out'
                            }}
                        />
                    </div>
                </div>
            )}

            <style>{`
                @keyframes modalFadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
        </>
    );
};

export default Masonry;
