import type { Block } from '../../../../packages/payload/src/fields/config/types'

import { lexicalEditor } from '../../../../packages/richtext-lexical/src'

export const BlockColumns: any = {
  type: 'array',
  name: 'columns',
  interfaceName: 'BlockColumns',
  admin: {
    initCollapsed: true,
  },
  fields: [
    {
      name: 'text',
      type: 'text',
    },
  ],
}
export const ConditionalLayoutBlock: Block = {
  fields: [
    {
      label: 'Layout',
      name: 'layout',
      type: 'select',
      options: ['1', '2', '3'],
      defaultValue: '1',
      required: true,
    },
    {
      ...BlockColumns,
      admin: {
        condition: (data, siblingData) => {
          return ['1'].includes(siblingData.layout)
        },
      },
      minRows: 1,
      maxRows: 1,
    },
    {
      ...BlockColumns,
      admin: {
        condition: (data, siblingData) => {
          return ['2'].includes(siblingData.layout)
        },
      },
      minRows: 2,
      maxRows: 2,
    },
    {
      ...BlockColumns,
      admin: {
        condition: (data, siblingData) => {
          return ['3'].includes(siblingData.layout)
        },
      },
      minRows: 3,
      maxRows: 3,
    },
  ],
  slug: 'conditionalLayout',
}

export const TextBlock: Block = {
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
    },
  ],
  slug: 'text',
}

export const RadioButtonsBlock: Block = {
  fields: [
    {
      name: 'radioButtons',
      type: 'radio',
      options: [
        {
          label: 'Option 1',
          value: 'option1',
        },
        {
          label: 'Option 2',
          value: 'option2',
        },
        {
          label: 'Option 3',
          value: 'option3',
        },
      ],
    },
  ],
  slug: 'radioButtons',
}

export const RichTextBlock: Block = {
  fields: [
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor(),
    },
  ],
  slug: 'richText',
}

export const UploadAndRichTextBlock: Block = {
  fields: [
    {
      name: 'upload',
      type: 'upload',
      relationTo: 'uploads',
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor(),
    },
  ],
  slug: 'uploadAndRichText',
}

export const RelationshipBlock: Block = {
  fields: [
    {
      name: 'rel',
      type: 'relationship',
      relationTo: 'uploads',
      required: true,
    },
  ],
  slug: 'relationshipBlock',
}

export const SelectFieldBlock: Block = {
  fields: [
    {
      name: 'select',
      type: 'select',
      options: [
        {
          label: 'Option 1',
          value: 'option1',
        },
        {
          label: 'Option 2',
          value: 'option2',
        },
        {
          label: 'Option 3',
          value: 'option3',
        },
        {
          label: 'Option 4',
          value: 'option4',
        },
        {
          label: 'Option 5',
          value: 'option5',
        },
      ],
    },
  ],
  slug: 'select',
}

export const SubBlockBlock: Block = {
  slug: 'subBlock',
  fields: [
    {
      name: 'subBlocks',
      type: 'blocks',
      blocks: [
        {
          slug: 'contentBlock',
          fields: [
            {
              name: 'richText',
              type: 'richText',
              required: true,
              editor: lexicalEditor(),
            },
          ],
        },
        {
          slug: 'textArea',
          fields: [
            {
              name: 'content',
              type: 'textarea',
              required: true,
            },
          ],
        },
        SelectFieldBlock,
      ],
    },
  ],
}
