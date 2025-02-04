import {parser} from "./GanttLangLezerParser"
import {LRLanguage, LanguageSupport} from "@codemirror/language"
import {styleTags, tags as t} from "@lezer/highlight"

export const GanttLang = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        TaskKW: [t.keyword, t.strong],
        CostsKW: t.keyword,
        SpansKW: t.keyword,
        DependsOnKW: t.keyword,
        ParticipantKW: [t.keyword, t.strong],
        DashKW: t.keyword,
        ColonKW: t.keyword,

        Integer: t.integer,
        String: t.string,
        Comment: t.comment,
      })
    ]
  })
})

export function GanttLangSupport() {
  return new LanguageSupport(GanttLang)
}
