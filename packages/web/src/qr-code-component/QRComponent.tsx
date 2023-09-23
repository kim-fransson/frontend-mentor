interface QRComponentProps {
  imageUrl: string;
  alt?: string;
  title: string;
  text: string;
}

export const QRComponent = (props: QRComponentProps) => {
  const { imageUrl, alt, title, text } = props;
  return (
    <div className="font-outfit flex flex-col items-center max-w-xs rounded-3xl bg-white p-4 shadow-lg">
      <img
        className="rounded-2xl aspect-square w-full"
        src={imageUrl}
        alt={alt || "QR code"}
      />
      <h2 className="text-center mt-6 text-2xl font-bold px-1 text-gray-700">
        {title}
      </h2>
      <p className="mt-4 mb-4 text-gray-400 px-1 text-center text-base">
        {text}
      </p>
    </div>
  );
};
