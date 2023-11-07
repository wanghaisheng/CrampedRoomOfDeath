export enum TILE_TYPE_ENUM {
  WALL_ROW = 'WALL_ROW',
  WALL_COLUMN = 'WALL_COLUMN',
  WALL_LEFT_TOP = 'WALL_LEFT_TOP',
  WALL_LEFT_BOTTOM = 'WALL_LEFT_BOTTOM',
  WALL_RIGHT_TOP = 'WALL_RIGHT_TOP',
  WALL_RIGHT_BOTTOM = 'WALL_RIGHT_BOTTOM',
  CLIFF_LEFT = 'CLIFF_LEFT',
  CLIFF_RIGHT = 'CLIFF_RIGHT',
  CLIFF_CENTER = 'CLIFF_CENTER',
  FLOOR = 'FLOOR',
}

export enum EVENT_ENUM {
  NEXT_LEVEL = 'NEXT_LEVEL',
  PLAYER_CTRL = 'PLAYER_CTRL',
  PLAYER_MOVE_END = 'PLAYER_MOVE_END',
  PLAYER_BORN = 'PLAYER_BORN',
  ATTACK_PLAYER = 'ATTACK_PLAYER',
  ATTACK_ENEMY = 'ATTACK_ENEMY',
  DOOR_OPEN = 'DOOR_OPEN',
}

export enum INPUT_DIRECTION_ENUM {
  'TOP' = 'TOP',
  'BOTTOM' = 'BOTTOM',
  'LEFT' = 'LEFT',
  'RIGHT' = 'RIGHT',
  'TURNLEFT' = 'TURNLEFT',
  'TURNRIGHT' = 'TURNRIGHT',
}

export enum FSM_PARAMS_TYPE_NUM {
  TRIGGER = 'TRIGGER',
  NUMBER = 'NUMBER',
}

export enum PARAMS_NAME_NUM {
  IDLE = 'IDLE',
  TURNLEFT = 'TURNLEFT',
  TURNRIGHT = 'TURNRIGHT',
  BLOCKFRONT = 'BLOCKFRONT',
  BLOCKBACK = 'BLOCKBACK',
  BLOCKLEFT = 'BLOCKLEFT',
  BLOCKRIGHT = 'BLOCKRIGHT',
  BLOCKTURNLEFT = 'BLOCKTURNLEFT',
  BLOCKTURNRIGHT = 'BLOCKTURNRIGHT',
  ATTACK = 'ATTACK',
  DEATH = 'DEATH',
  AIRDEATE = 'AIRDEATE',
  DIRECTION = 'DIRECTION',
}

export enum DIRECTION_ENUM {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export enum ENTITY_STATE_ENUM {
  IDLE = 'IDLE',
  TURNLEFT = 'TURNLEFT',
  TURNRIGHT = 'TURNRIGHT',
  BLOCKFRONT = 'BLOCKFRONT',
  BLOCKBACK = 'BLOCKBACK',
  BLOCKLEFT = 'BLOCKLEFT',
  BLOCKRIGHT = 'BLOCKRIGHT',
  BLOCKTURNLEFT = 'BLOCKTURNLEFT',
  BLOCKTURNRIGHT = 'BLOCKTURNRIGHT',
  DEATH = 'DEATH',
  AIRDEATE = 'AIRDEATE',
  ATTACK = 'ATTACK',
}

export enum DIRECTION_ORDER_ENUM {
  TOP = 0,
  BOTTOM = 1,
  LEFT = 2,
  RIGHT = 3,
}

export enum ENTITY_TYPE_ENUM {
  PLAYER = 'PLAYER',
  SKELETON_WOODEN = 'SKELETON_WOODEN',
  SKELETON_IRON = 'SKELETON_IRON',
  DOOR = 'DOOR',
  BURST = 'BURST',
}