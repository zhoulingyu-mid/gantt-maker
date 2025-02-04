#!/usr/bin/env bash

SCRIPT_DIR=$(realpath "${BASH_SOURCE[0]}")
SCRIPT_DIR=$(dirname "${SCRIPT_DIR}")

(
  cd "${SCRIPT_DIR}/../src/GanttLangAntlr"
  antlr4 -Dlanguage=TypeScript GanttLang.g4 -visitor
)