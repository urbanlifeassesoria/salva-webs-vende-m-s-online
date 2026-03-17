/* ============================================================
   VideoPlaceholder — Placeholder premium para videos pendientes
   Muestra una card elegante con botón play y texto "Próximamente".
   
   Para reemplazar por video real: cambiar el src del <video> o
   usar un <iframe> de YouTube/Vimeo en su lugar.
   
   Props:
   - videoSrc: URL del video (opcional, si existe se renderiza)
   - posterSrc: imagen poster del video
   - label: texto descriptivo debajo del video
   - className: clases adicionales
   - aspectRatio: "video" (16:9) o "vertical" (9:16)
   ============================================================ */
import { Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Props {
  videoSrc?: string;
  posterSrc?: string;
  label?: string;
  className?: string;
  aspectRatio?: "video" | "vertical";
}

const VideoPlaceholder = ({
  videoSrc,
  posterSrc,
  label,
  className = "",
  aspectRatio = "video",
}: Props) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ratio = aspectRatio === "vertical" ? "aspect-[9/16]" : "aspect-video";

  /* ── Poner preview en segundo 2 (espera a que el video esté listo) ── */
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || !videoSrc || playing) return;

    const setPreviewTime = () => {
      vid.currentTime = 2;
    };

    /* Si la metadata ya cargó, setear directamente */
    if (vid.readyState >= 1) {
      setPreviewTime();
    } else {
      /* Si no, esperar al evento loadedmetadata */
      vid.addEventListener("loadedmetadata", setPreviewTime, { once: true });
    }

    return () => {
      vid.removeEventListener("loadedmetadata", setPreviewTime);
    };
  }, [videoSrc, playing]);

  /* ── Reproducir video directamente en el mismo elemento ── */
  const handlePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = false;
    vid.controls = true;
    vid.currentTime = 0;
    vid.play().catch((err) => console.error("Video playback failed:", err));
    setPlaying(true);
  };

  /* ── Si hay video real, mostrar reproductor ── */
  if (videoSrc) {
    return (
      <div className={`relative rounded-xl overflow-hidden ${ratio} ${className}`}>
        {/* Video único — siempre montado para conservar el gesto del usuario */}
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />

        {/* Overlay con botón play (se oculta al reproducir) */}
        {!playing && (
          <div
            className="absolute inset-0 bg-primary/20 flex items-center justify-center cursor-pointer group hover:bg-primary/30 transition-colors"
            onClick={handlePlay}
          >
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 text-accent-foreground ml-1" />
            </div>
          </div>
        )}

        {label && (
          <p className="absolute bottom-0 left-0 right-0 text-center text-xs text-primary-foreground/70 bg-primary/60 backdrop-blur-sm py-2">
            {label}
          </p>
        )}
      </div>
    );
  }

  /* ── Placeholder "Próximamente" ── */
  return (
    <div
      className={`relative rounded-xl overflow-hidden ${ratio} bg-gradient-to-br from-navy to-navy-light flex items-center justify-center ${className}`}
    >
      {/* Efecto visual sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-secondary blur-2xl" />
      </div>

      <div className="text-center relative z-10">
        <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-3 border border-primary-foreground/20">
          <Play className="w-7 h-7 text-accent ml-1" />
        </div>
        <p className="text-primary-foreground/80 text-sm font-medium">
          Próximamente
        </p>
        {label && (
          <p className="text-primary-foreground/50 text-xs mt-1 max-w-[200px]">
            {label}
          </p>
        )}
      </div>
    </div>
  );
};

export default VideoPlaceholder;
