import { _decorator, Component, Sprite, UITransform } from 'cc';
import { TILE_HEIGHT, TILE_WIDTH } from '../tile/TileManager';
import {
  DIRECTION_ENUM,
  DIRECTION_ORDER_ENUM,
  ENTITY_STATE_ENUM,
  ENTITY_TYPE_ENUM,
  EVENT_ENUM,
  PARAMS_NAME_NUM,
  SPIKE_STATE_ENUM,
  SPIKE_STATE_ORDER_ENUM,
  SPIKE_TYPE_ENUM,
} from '../enum';
import { Entity, Spike } from '../level';
import { randomBylen } from '../utils';
import { SpikeStateMechine } from './SpikeStateMechine';
import { EventManager } from '../runtime/EventManager';
const { ccclass } = _decorator;

@ccclass('SpikeManager')
export class SpikeManager extends Component {
  id = randomBylen(8);
  x = 0;
  y = 0;
  fsm!: SpikeStateMechine;
  private _count!: number;
  private _type!: SPIKE_TYPE_ENUM;

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
    this.fsm.setParams(value, true);
  }

  get count() {
    return this._count;
  }

  set count(value) {
    this._count = value;
    this.fsm.setParams(PARAMS_NAME_NUM.SPIKE_STATE, value);
  }

  async init(params: Spike) {
    const sprite = this.addComponent(Sprite)!;
    sprite.sizeMode = Sprite.SizeMode.CUSTOM;

    const uiTransform = this.getComponent(UITransform);
    uiTransform?.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4);

    this.fsm = this.addComponent(SpikeStateMechine)!;
    await this.fsm.init();

    this.x = params.x;
    this.y = params.y;
    this.count = params.count;
    this.type = params.type;

    EventManager.instance.on(EVENT_ENUM.PLAYER_MOVE_END, this.onChangeCount, this);
  }

  protected onDestroy(): void {
    super.onDestroy?.();
    EventManager.instance.off(EVENT_ENUM.PLAYER_MOVE_END, this.onChangeCount);
  }

  update(): void {
    this.node.setPosition(
      this.x * TILE_WIDTH - TILE_WIDTH * 1.5,
      this.y * TILE_HEIGHT + TILE_HEIGHT * 1.5
    );
  }

  onChangeCount() {
    switch (this.type) {
      case SPIKE_TYPE_ENUM.ONE:
        this.count = (this.count + 1) % 3;
        break;
      case SPIKE_TYPE_ENUM.TWO:
        this.count = (this.count + 1) % 4;
        break;
      case SPIKE_TYPE_ENUM.THREE:
        this.count = (this.count + 1) % 5;
        break;
      case SPIKE_TYPE_ENUM.FOUR:
        this.count = (this.count + 1) % 6;
        break;
    }
  }
}
