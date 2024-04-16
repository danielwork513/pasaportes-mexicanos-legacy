import clsx from "clsx"

interface ButtonProps {
  label: string
  onClick: () => void
  variant?: "primary" | "secondary" | "tertiary" | "danger"
}

export default function Button({ label, onClick, variant }: ButtonProps) {
  return (
    <div
      className={clsx(
        "md:p-4 p-2 flex justify-center items-center rounded-md shadow-xl hover:cursor-pointer duration-300",
        variant === "primary" && "bg-green-200 hover:bg-green-300",
        variant === "secondary" && "bg-white ",
        variant === "tertiary" && "bg-gray-100",
        variant === "danger" && "bg-red-200"
      )}
      onClick={onClick}
    >
      {label}
    </div>
  )
}
