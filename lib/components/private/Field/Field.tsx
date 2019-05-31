import React, { ReactNode, AllHTMLAttributes } from 'react';
import { useClassNames } from 'sku/treat';
import { Box, BoxProps } from '../../Box/Box';
import { FieldLabel } from '../../FieldLabel/FieldLabel';
import {
  FieldMessage,
  FieldMessageProps,
} from '../../FieldMessage/FieldMessage';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import * as styles from './Field.treat';
import { useText, useTouchableSpace } from '../../../hooks/typography';

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;
export interface FieldProps {
  id: NonNullable<FormElementProps['id']>;
  name?: FormElementProps['name'];
  disabled?: FormElementProps['disabled'];
  label?: string;
  secondaryLabel?: ReactNode;
  tertiaryLabel?: ReactNode;
  description?: string;
  message?: ReactNode | false;
  secondaryMessage?: ReactNode;
  tone?: FieldMessageProps['tone'];
}

type PassthroughProps = 'id' | 'name' | 'disabled';
interface FieldRenderProps extends Pick<FieldProps, PassthroughProps> {
  backgroundColor: BoxProps['backgroundColor'];
  boxShadow: BoxProps['boxShadow'];
  borderRadius: BoxProps['borderRadius'];
  width: BoxProps['width'];
  paddingLeft: BoxProps['paddingLeft'];
  paddingRight: BoxProps['paddingRight'];
  'aria-describedby': string;
  className: string;
}

interface InternalFieldProps extends FieldProps {
  children(props: FieldRenderProps): ReactNode;
}

export const Field = ({
  id,
  name,
  disabled = false,
  label,
  secondaryLabel,
  tertiaryLabel,
  description,
  children,
  message,
  secondaryMessage,
  tone = 'neutral',
}: InternalFieldProps) => {
  const messageId = `${id}-message`;

  return (
    <Box>
      <FieldLabel
        id={id}
        label={label}
        secondaryLabel={secondaryLabel}
        tertiaryLabel={tertiaryLabel}
        description={description}
      />
      <Box className={styles.fieldContainer}>
        {children({
          id,
          name,
          backgroundColor: disabled ? 'inputDisabled' : 'input',
          boxShadow:
            tone === 'critical' && !disabled
              ? 'borderCritical'
              : 'borderStandard',
          width: 'full',
          paddingLeft: 'small',
          paddingRight: 'small',
          borderRadius: 'standard',
          'aria-describedby': messageId,
          disabled,
          className: useClassNames(
            styles.field,
            useText({ size: 'standard', baseline: false }),
            useTouchableSpace('standard'),
          ),
        })}
        <FieldOverlay variant="focus" className={styles.focusOverlay} />
        <FieldOverlay variant="hover" className={styles.hoverOverlay} />
      </Box>
      <FieldMessage
        id={messageId}
        tone={tone}
        disabled={disabled}
        message={message}
        secondaryMessage={secondaryMessage}
      />
    </Box>
  );
};
