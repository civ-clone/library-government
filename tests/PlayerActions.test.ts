import * as Governments from '../Governments';
import * as PlayerActions from '../PlayerActions';
import { Anarchy } from '@civ-clone/base-government-anarchy/Anarchy';
import { ChooseGovernment } from '@civ-clone/base-player-action-choose-government/ChooseGovernment';
import { Revolution } from '@civ-clone/base-player-action-revolution/Revolution';
import { expect } from 'chai';

// Re-exports, not copies: a class from here is the class itself, so `instanceof` and a save's class names agree
//  whichever path a ruleset imports it from.
describe('library-government', (): void => {
  it('re-exports the player actions of a change of government', (): void => {
    expect(PlayerActions.Revolution).equal(Revolution);
    expect(PlayerActions.ChooseGovernment).equal(ChooseGovernment);
  });

  it('re-exports the governments', (): void => {
    expect(Governments.Anarchy).equal(Anarchy);
    expect(Object.keys(Governments)).eql([
      'Anarchy',
      'Communism',
      'Democracy',
      'Despotism',
      'Monarchy',
      'Republic',
    ]);
  });
});
