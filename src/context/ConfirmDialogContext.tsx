import React, { createContext, useContext, useState, ReactNode } from "react";

interface ConfirmOptions {
  title?: string;
  message?: string;
  onConfirm: () => void;
}

interface ConfirmContextType {
  confirm: (options: ConfirmOptions) => void;
}

const ConfirmContext = createContext<ConfirmContextType>({
  confirm: () => {},
});

export const useConfirm = () => useContext(ConfirmContext);

export const ConfirmProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ConfirmOptions | null>(null);

  const confirm = (opts: ConfirmOptions) => {
    setOptions(opts);
    setIsOpen(true);
  };

  const handleConfirm = () => {
    options?.onConfirm();
    setIsOpen(false);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <ConfirmContext.Provider value={{ confirm }}>
      {children}

      {/* Confirm Dialog */}
      {isOpen && options && (
        <div className="modal show d-block" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content shadow">
              <div className="modal-header">
                <h5 className="modal-title">{options.title || "Are you sure?"}</h5>
              </div>
              <div className="modal-body">
                <p>{options.message || "This action cannot be undone."}</p>
              </div>
              <div className="modal-footer">
                <button onClick={handleClose} className="btn btn-secondary btn-sm">
                  Cancel
                </button>
                <button onClick={handleConfirm} className="btn btn-danger btn-sm">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </ConfirmContext.Provider>
  );
};
