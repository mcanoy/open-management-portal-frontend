import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { EngagementDetails } from '../engagement_details';
import {
  upcomingEngagement,
  currentEngagement,
  pastEngagement,
} from '../mock_engagements';
import { EngagementStatus } from '../../../schemas/engagement_schema';

afterEach(cleanup);

describe('Upcoming Engagement', () => {
  test('shows the right status and label', () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <EngagementDetails
          engagement={upcomingEngagement()}
          status={EngagementStatus.upcoming}
        />
      </MemoryRouter>
    );
    expect(getByText('UPCOMING')).toBeInTheDocument();
  });

  test('matches the snapshot', () => {
    expect(
      render(
        <MemoryRouter>
          <EngagementDetails
            engagement={upcomingEngagement()}
            status={EngagementStatus.upcoming}
          />
        </MemoryRouter>
      )
    ).toMatchSnapshot();
  });
});

describe('Active Engagement', () => {
  test('shows the right status and label', () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <EngagementDetails
          engagement={currentEngagement()}
          status={EngagementStatus.active}
        />
      </MemoryRouter>
    );
    expect(getByText('ACTIVE')).toBeInTheDocument();
  });

  test('matches the snapshot for active engagements', () => {
    expect(
      render(
        <MemoryRouter>
          <EngagementDetails
            engagement={currentEngagement()}
            status={EngagementStatus.active}
          />
        </MemoryRouter>
      )
    ).toMatchSnapshot();
  });
});

describe('Past Engagement', () => {
  test('shows the right status and label', () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <EngagementDetails
          engagement={pastEngagement()}
          status={EngagementStatus.past}
        />
      </MemoryRouter>
    );
    expect(getByText('PAST')).toBeInTheDocument();
  });

  test('matches the snapshot for active engagements', () => {
    expect(
      render(
        <MemoryRouter>
          <EngagementDetails
            engagement={pastEngagement()}
            status={EngagementStatus.past}
          />
        </MemoryRouter>
      )
    ).toMatchSnapshot();
  });
});