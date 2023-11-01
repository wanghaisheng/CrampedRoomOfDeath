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
}

export enum INPUT_DIRECTION_ENUM {
  'TOP' = 'TOP',
  'BOTTOM' = 'BOTTOM',
  'LEFT' = 'LEFT',
  'RIGHT' = 'RIGHT',
  'TURNLEFT' = 'TURNLEFT',
  'TURNRIGHT' = 'TURNRIGHT',
}