import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="max-w-lg text-center justify-center flex flex-col gap-4">
          <h1 className={title()}>Мой блог в тг</h1>
          <p className="mt-4">
            Нажми кнопку ниже, чтобы перейти в мой тг-канал
          </p>
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.blog}
          >
            та самая кнопка
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
