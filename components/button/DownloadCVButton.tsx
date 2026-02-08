import { FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import ActionButton from "./ActionButton";

export default function DownloadCVButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <ActionButton
        icon={FileText}
        text="Download CV"
        onClick={() => setOpen(true)}
        className="text-sm"
      />

      {open &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-surface border-border flex w-fit flex-col gap-2 rounded-lg border px-8 py-5 shadow-xl">
              <h2 className="mb-4 text-lg font-medium">Choose CV language</h2>

              <div className="flex justify-center gap-3">
                <a
                  href="/cv/guilherme-esteves-cv-pt.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="border-highlight/50 lg:hover:border-highlight/90 row-4 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg border bg-black/20 px-5 py-3 shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out active:scale-98"
                >
                  Portuguese
                </a>

                <a
                  href="/cv/guilherme-esteves-cv-en.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="border-highlight/50 lg:hover:border-highlight/90 row-4 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg border bg-black/20 px-5 py-3 shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out active:scale-98"
                >
                  English
                </a>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-muted mt-4 text-sm underline-offset-4 hover:underline"
              >
                Cancel
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
