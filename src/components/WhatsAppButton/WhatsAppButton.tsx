import { useLocation } from 'react-router-dom';

const WHATSAPP_URL =
    'https://wa.me/256750537127?text=Hello%20Eyre%20Gorilla%20Adventures%2C%20I%20would%20like%20to%20plan%20a%20safari.';

const WhatsAppButton = () => {
    const location = useLocation();

    // The Connect page already has a prominent WhatsApp CTA.
    if (location.pathname === '/connect') {
        return null;
    }

    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="group fixed bottom-8 right-8 z-[60] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
            <svg className="relative w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 0C5.385 0 0 5.383 0 12.029c0 2.124.551 4.198 1.597 6.014l-1.685 6.16 6.302-1.654a11.967 11.967 0 005.817 1.503c6.645 0 12.033-5.383 12.033-12.029C24.064 5.383 18.675 0 12.031 0zm0 21.821c-1.801 0-3.565-.484-5.1-1.395l-.365-.216-3.793.996 1.014-3.698-.238-.378A9.773 9.773 0 012.24 12.029c0-5.4 4.394-9.794 9.791-9.794 5.401 0 9.795 4.394 9.795 9.794 0 5.4-4.394 9.792-9.795 9.792zm4.84-6.621c-.266-.134-1.572-.777-1.815-.866-.244-.09-.42-.134-.598.134-.176.267-.687.865-.842 1.042-.155.178-.311.2-.577.067a7.24 7.24 0 01-2.126-1.309 8.01 8.01 0 01-1.474-1.834c-.156-.267-.017-.412.115-.545.118-.119.266-.312.399-.467.133-.156.177-.267.266-.445.088-.178.044-.334-.022-.467-.067-.134-.598-1.444-.82-1.978-.216-.523-.435-.452-.598-.461-.155-.008-.332-.01-.51-.01-.177 0-.465.067-.709.333-.244.267-.932.912-.932 2.224 0 1.313.954 2.58 1.087 2.758.133.178 1.88 2.872 4.553 4.026.637.275 1.133.439 1.52.562.639.204 1.22.175 1.678.106.516-.078 1.572-.642 1.794-1.263.221-.621.221-1.155.155-1.263-.066-.108-.243-.175-.509-.308z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;
