interface Props {
  title: string;
  subtitle?: string
}

export default function StepHeader({ title, subtitle }: Props) {
  return (
    <>
      <h3 className="font-bold md:text-3xl text-xl">
        {title}
      </h3>

      {subtitle && (
        <p className="my-2 mb-7 text-lg text-neutral-700">
          {subtitle}
        </p>
      )}
    </>
  )
}