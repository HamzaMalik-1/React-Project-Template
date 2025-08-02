import React from "react";
import { useConfirm } from "../context/ConfirmDialogContext";

const DeleteButton = () => {
  const { confirm } = useConfirm();

  const handleDelete = () => {
    confirm({
      title: "Delete Item",
      message: "Are you sure you want to delete this item?",
      onConfirm: () => {
        // your delete logic
        console.log("Deleted!");
      },
    });
  };

  return <button onClick={handleDelete} className="btn btn-danger">Delete</button>;
};

export default DeleteButton;







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

      {/* Simple Confirm Dialog UI (Bootstrap-styled) */}
      {isOpen && options && (
        <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
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












// 🧠 3. Use Spinner During API Calls
// When fetching data via createAsyncThunk, you can use:

// tsx
// Copy
// Edit
const { loading, data, error } = useAppSelector((state) => state.users);

// Inside component
if (loading) return <Spinner />;
// Or inside buttons:

// tsx
// Copy
// Edit
<button disabled={loading}>
  {loading ? <span className="spinner-border spinner-border-sm" /> : "Submit"}
</button>