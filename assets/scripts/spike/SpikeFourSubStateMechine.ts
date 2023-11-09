import { State } from '../base/State';
import { StateMachine } from '../base/StateMachine';
import { PARAMS_NAME_NUM, SPIKE_STATE_ENUM, SPIKE_STATE_ORDER_ENUM } from '../enum';
import { SubStateMachine } from '../base/SubStateMachine';

const BASE_URL = '/texture/spikes/spikesfour';

export class SpikeFourSubStateMechine extends SubStateMachine {
  constructor(fsm: StateMachine) {
    super(fsm);
    this.stateMachines.set(SPIKE_STATE_ENUM.ZERO, new State(fsm, `${BASE_URL}/zero`));
    this.stateMachines.set(SPIKE_STATE_ENUM.ONE, new State(fsm, `${BASE_URL}/one`));
    this.stateMachines.set(SPIKE_STATE_ENUM.TWO, new State(fsm, `${BASE_URL}/two`));
    this.stateMachines.set(SPIKE_STATE_ENUM.THREE, new State(fsm, `${BASE_URL}/three`));
    this.stateMachines.set(SPIKE_STATE_ENUM.FOUR, new State(fsm, `${BASE_URL}/four`));
    this.stateMachines.set(SPIKE_STATE_ENUM.FIVE, new State(fsm, `${BASE_URL}/five`));
  }

  run() {
    const value = this.fsm.getParams(PARAMS_NAME_NUM.SPIKE_STATE)?.value;
    this.currentState = this.stateMachines.get(SPIKE_STATE_ORDER_ENUM[value as number]);
  }
}
