import { format } from "date-fns";
import { pt } from "date-fns/locale";
import fs from "fs";
import matter from "gray-matter";

export function getStaticProps(slug: string) {
    const folder = "posts/"
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, 'utf-8')
    const matterResult = matter(content)

    const date = format(new Date(matterResult.data.date), "dd 'de' MMMM 'de' yyyy", {
        locale: pt
    })

    return {
        matterResult,
        date,
        slug: slug.replace(".md", ""),
        fallback: false,
    }
}
