import { Container } from "@/components/ui/Container";
import { statement } from "@/lib/content";

/** Navy statement band: two big uppercase lines, one left, one right-aligned. */
export function Statement() {
  return (
    <section className="bg-navy py-16 text-white md:py-24 lg:py-32" aria-label="Trip summary">
      <Container>
        <p className="display max-w-4xl text-3xl uppercase sm:text-4xl lg:text-6xl">
          {statement.left}
        </p>
        <p className="display ml-auto mt-8 max-w-4xl text-right text-3xl uppercase sm:text-4xl lg:text-6xl">
          {statement.right}
        </p>
      </Container>
    </section>
  );
}
