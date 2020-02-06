import React, { ReactNode, useState } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Textarea } from './Textarea';
import { TextLink } from '../TextLink/TextLink';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  category: 'Interaction',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Textarea',
      Container,
      Example: ({ id, handler }) => (
        <Textarea
          id={id}
          value="Senior Developer"
          onChange={handler}
          label="Job Title"
        />
      ),
    },
    {
      label: 'Textarea with message',
      Container,
      Example: ({ id, handler }) => (
        <Textarea
          id={id}
          value=""
          onChange={handler}
          label="Job Title"
          message="e.g. Senior Developer"
        />
      ),
    },
    {
      label: 'Textarea with secondary label',
      Container,
      Example: ({ id, handler }) => (
        <Textarea
          id={id}
          value=""
          onChange={handler}
          label="Title"
          secondaryLabel="Optional"
        />
      ),
    },
    {
      label: 'Textarea with tertiary label',
      Container,
      Example: ({ id, handler }) => (
        <Textarea
          id={id}
          value=""
          onChange={handler}
          label="Title"
          secondaryLabel="Optional"
          tertiaryLabel={<TextLink>Help?</TextLink>}
        />
      ),
    },
    {
      label: 'Textarea with error',
      Container,
      Example: ({ id, handler }) => (
        <Textarea
          id={id}
          value="No"
          onChange={handler}
          label="Do you like Braid?"
          message="Answer is incorrect"
          tone="critical"
        />
      ),
    },
    {
      label: 'Textarea with positive message',
      Container,
      Example: ({ id, handler }) => (
        <Textarea
          id={id}
          value="Yes"
          onChange={handler}
          label="Do you like Braid?"
          message="Nice one!"
          tone="positive"
        />
      ),
    },
    {
      label: 'Textarea grow field with typing, limited to 6 lines',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('');

        return (
          <Textarea
            id={id}
            value={value}
            onChange={e => setValue(e.currentTarget.value)}
            label="Do you like Braid?"
            lineLimit={6}
          />
        );
      },
    },
    {
      label: 'Textarea nearing character limit, eg. 50 characters',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState(
          'The text is nearing the 50 character limit',
        );

        return (
          <Textarea
            id={id}
            value={value}
            onChange={e => setValue(e.currentTarget.value)}
            label="Do you like Braid?"
            characterLimit={50}
          />
        );
      },
    },
    {
      label: 'Textarea exceeding character limit, eg. > 50 characters',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState(
          'The long piece of text exceeding the specified 50 character limit',
        );

        return (
          <Textarea
            id={id}
            value={value}
            onChange={e => setValue(e.currentTarget.value)}
            label="Do you like Braid?"
            characterLimit={50}
          />
        );
      },
    },
  ],
};

export default docs;
