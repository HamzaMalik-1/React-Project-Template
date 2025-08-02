// src/context/ConfirmDialogContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Modal, Button } from "react-bootstrap";

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

      <Modal show={isOpen} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{options?.title || "Are you sure?"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {options?.message || "This action cannot be undone."}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" size="sm" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </ConfirmContext.Provider>
  );
};
