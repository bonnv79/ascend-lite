import { logos } from "@/content/home";
import { Container } from "./section";

const shapes = [
  <circle key="c" cx="8" cy="8" r="7" />,
  <rect key="r" x="1" y="1" width="14" height="14" rx="4" />,
  <path key="t" d="M8 1 15 15H1Z" />,
  <path key="d" d="M8 0 16 8 8 16 0 8Z" />,
  <path key="h" d="M4 1h8l4 7-4 7H4L0 8Z" />,
  <path key="s" d="M8 1a7 7 0 1 0 7 7H8Z" />,
];

export function LogoCloud() {
  return (
    <Container className="py-14">
      <p className="text-center text-sm text-muted">Trusted by product teams at</p>
      <ul className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
        {logos.map((name, i) => (
          <li key={name} className="flex items-center justify-center gap-2 text-lg font-semibold tracking-tight text-muted">
            <svg viewBox="0 0 16 16" className="size-5 fill-current" aria-hidden>
              {shapes[i % shapes.length]}
            </svg>
            {name}
          </li>
        ))}
      </ul>
    </Container>
  );
}
