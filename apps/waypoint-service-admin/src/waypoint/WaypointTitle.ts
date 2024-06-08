import { Waypoint as TWaypoint } from "../api/waypoint/Waypoint";

export const WAYPOINT_TITLE_FIELD = "name";

export const WaypointTitle = (record: TWaypoint): string => {
  return record.name?.toString() || String(record.id);
};
