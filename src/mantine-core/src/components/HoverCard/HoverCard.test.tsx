import React from 'react';
import { itRendersChildren, checkAccessibility } from '@mantine/tests';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HoverCard, HoverCardProps } from './HoverCard';

function TestContainer(props: Partial<HoverCardProps>) {
  return (
    <HoverCard transitionDuration={0} {...props}>
      <HoverCard.Target>
        <button type="button">test-target</button>
      </HoverCard.Target>
      <HoverCard.Dropdown>test-dropdown</HoverCard.Dropdown>
    </HoverCard>
  );
}

describe('@mantine/core/HoverCard', () => {
  checkAccessibility([<TestContainer initiallyOpened />, <TestContainer />]);
  itRendersChildren(HoverCard, {});

  it('shows card on hover', () => {
    render(<TestContainer />);
    expect(screen.queryAllByText('test-dropdown')).toHaveLength(0);

    userEvent.hover(screen.getByRole('button'));
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();
  });

  it('correctly handles initiallyOpened prop', () => {
    render(<TestContainer initiallyOpened />);
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(HoverCard.displayName).toEqual('@mantine/core/HoverCard');
  });
});