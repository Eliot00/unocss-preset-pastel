/**
 * @license
 * Copyright (C) 2025  Elliot Xu
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { definePreset } from '@unocss/core'
import { colorSystem } from '@pastel-palette/colors'
import type { ColorSystem } from '@pastel-palette/colors'
import type { Theme } from '@unocss/preset-wind4'

export type PresetPastelOptions = {
  variant?: keyof ColorSystem
}

export const presetPastel = definePreset<PresetPastelOptions, Theme>((options = {}) => {
  const themeSystem = colorSystem[options.variant || 'regular']
  const result: Record<string, string> = {}
  for (const [name, variants] of Object.entries(themeSystem.colors)) {
    result[name] = variants.light.oklch
    result[`${name}-light`] = variants.light.oklch
    result[`${name}-dark`] = variants.dark.oklch
  }

  for (const [name, variants] of Object.entries(themeSystem.grayScale)) {
    result[name] = variants.light.oklch
    result[`${name}-light`] = variants.light.oklch
    result[`${name}-dark`] = variants.dark.oklch
  }

  for (const [name, semanticColors] of Object.entries(themeSystem.element)) {
    for (const [semanticName, variants] of Object.entries(semanticColors)) {
      result[`${name}-${semanticName}`] = variants.light.oklch
      result[`${name}-${semanticName}-light`] = variants.light.oklch
      result[`${name}-${semanticName}-dark`] = variants.dark.oklch
    }
  }

  for (const [name, variants] of Object.entries(themeSystem.application)) {
    result[name] = variants.light.oklch
    result[`${name}-light`] = variants.light.oklch
    result[`${name}-dark`] = variants.dark.oklch
  }

  for (const [name, variants] of Object.entries(themeSystem.material)) {
    result[name] = variants.light.oklch
    result[`${name}-light`] = variants.light.oklch
    result[`${name}-dark`] = variants.dark.oklch
  }

  for (const [semanticName, variants] of Object.entries(themeSystem.background)) {
    result[`background-${semanticName}`] = variants.light.oklch
    result[`background-${semanticName}-light`] = variants.light.oklch
    result[`background-${semanticName}-dark`] = variants.dark.oklch
  }

  for (const [semanticName, variants] of Object.entries(themeSystem.fill)) {
    result[`fill-${semanticName}`] = variants.light.oklch
    result[`fill-${semanticName}-light`] = variants.light.oklch
    result[`fill-${semanticName}-dark`] = variants.dark.oklch
  }

  return {
    name: 'unocss-preset-pastel',
    theme: {
      colors: result
    }
  }
})

