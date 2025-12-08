export interface VideoState {
  isPlaying: boolean;
  isHoveringControls: boolean;
  isHidingControls: boolean;
  isLoaded: boolean;
  isScrubbing: boolean;
  isActive: boolean;
  mode: "preview" | "full";
}

export type VideoAction =
  | { type: "SetIsActive"; isActive: boolean }
  | { type: "SetIsHoveringControls"; isHoveringControls: boolean }
  | { type: "SetIsLoaded"; isLoaded: boolean }
  | { type: "SetIsScrubbing"; isScrubbing: boolean }
  | { type: "SetIsPlaying"; isPlaying: boolean }
  | { type: "SetIsHidingControls"; isHidingControls: boolean }
  | { type: "SetMode"; mode: "preview" | "full" };

export const initialVideoState: VideoState = {
  isPlaying: false,
  isHoveringControls: false,
  isHidingControls: false, // Start with controls visible (matching reference)
  isLoaded: false,
  isScrubbing: false,
  isActive: false,
  mode: "preview",
};

export function videoReducer(
  state: VideoState,
  action: VideoAction
): VideoState {
  const { type, ...rest } = action;
  switch (type) {
    case "SetIsActive":
    case "SetIsHoveringControls":
    case "SetIsLoaded":
    case "SetIsScrubbing":
    case "SetIsPlaying":
    case "SetIsHidingControls":
    case "SetMode":
      return { ...state, ...rest };
    default:
      return state;
  }
}
