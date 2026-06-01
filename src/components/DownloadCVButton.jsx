import { useRef, useState } from 'react';
import { Download } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import CVDocument from './CVDocument';

export default function DownloadCVButton() {
  const { data, t } = useContent();
  const docRef = useRef(null);
  const [generating, setGenerating] = useState(false);

  const handleDownload = async () => {
    if (generating || !docRef.current) return;
    setGenerating(true);
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      await html2pdf()
        .set({
          margin: [12, 12, 12, 12],
          filename: 'Alexeis_Carrillo_CV.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            // Tailwind v4 emits oklch() colors that html2canvas can't parse.
            // The CV uses only inline hex styles, so we drop global stylesheets
            // from the clone to avoid oklch entirely.
            onclone: (clonedDoc) => {
              clonedDoc
                .querySelectorAll('style, link[rel="stylesheet"]')
                .forEach((el) => el.remove());
            },
          },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak: { mode: ['css', 'legacy'], avoid: '[data-cv-block]' },
        })
        .from(docRef.current)
        .save();
    } catch (err) {
      console.error('Error generating CV PDF:', err);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <>
      <button
        onClick={handleDownload}
        disabled={generating}
        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {generating ? (
          <>
            <span className="animate-spin">⟳</span>
            {t.cv.generating}
          </>
        ) : (
          <>
            <Download size={20} />
            {t.hero.downloadCV}
          </>
        )}
      </button>
      {/* Off-canvas but laid out: absolutely positioned (so it stays out of the
          button's flex flow) and clipped, while html2canvas can still measure
          the document's full box. */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      >
        <CVDocument ref={docRef} data={data} t={t} />
      </div>
    </>
  );
}
