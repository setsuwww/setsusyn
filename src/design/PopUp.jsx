import React from "react";

const Popup = ({
  type = "info",
  judul = "Judul",
  pesan = "This is a message.",
  btnPrimary = "Primary",
  btnSecondary = "Secondary",
  btnFinaly = "Finaly",
  primary = false,
  secondary = false,
  finaly = false,
  onPrimary = () => {},
  onSecondary = () => {},
  onFinaly = () => {},
  onClose = () => {},
}) => {
  const popupStyles = {
    success: {
      bgIcon: "bg-green-300",
      bg: "bg-green-100",
      text: "text-green-900",
      border: "border-green-500",
      icon: "✔",
    },
    warning: {
      bgIcon: "bg-yellow-300",
      bg: "bg-yellow-100",
      text: "text-yellow-900",
      border: "border-yellow-500",
      icon: "⚠",
    },
    failed: {
      bgIcon: "bg-red-300",
      bg: "bg-red-100",
      text: "text-red-900",
      border: "border-red-500",
      icon: "✖",
    },
    info: {
      bgIcon: "bg-gray-300",
      bg: "bg-gray-100",
      text: "text-gray-900",
      border: "border-gray-500",
      icon: "ℹ",
    },
  };

  const styles = popupStyles[type];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative w-full max-w-xl bg-white rounded-lg shadow-xl">
        <div className={`flex items-center justify-between p-4 ${styles.bg} ${styles.text} border-t-4 ${styles.border}`}>

          <div className="flex items-center">
            <div className={`flex items-center justify-center ${styles.bgIcon} w-10 h-10 rounded-full text-xl font-bold`}>
              {styles.icon}
            </div>
            <h2 className="ml-3 text-lg font-semibold tracking-wide">{judul}</h2>
          </div>

          <button onClick={onClose}
            className={`text-lg font-semibold ${styles.text} hover:text-gray-800 focus:outline-none`}
            aria-label="Close">
            ✕
          </button>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <p className="text-gray-400 tracking-wide text-sm mb-6">{pesan}</p>
          <div className="flex justify-end space-x-3">
            {finaly && (
              <button
                className="px-4 py-2 tracking-wide bg-transparent text-blue-800 rounded-md hover:bg-blue-50"
                onClick={onFinaly}
              >
                {btnFinaly}
              </button>
            )}
            {secondary && (
              <button
                className="px-4 py-2 tracking-wide bg-blue-100 text-blue-800 rounded-md hover:bg-blue-300"
                onClick={onSecondary}
              >
                {btnSecondary}
              </button>
            )}
            {primary && (
              <button
                className="px-4 py-2 tracking-wide border border-blue-500 hover:border-blue-700 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                onClick={onPrimary}
              >
                {btnPrimary}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
