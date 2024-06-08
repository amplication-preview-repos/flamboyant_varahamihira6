import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WaypointService } from "./waypoint.service";
import { WaypointControllerBase } from "./base/waypoint.controller.base";

@swagger.ApiTags("waypoints")
@common.Controller("waypoints")
export class WaypointController extends WaypointControllerBase {
  constructor(protected readonly service: WaypointService) {
    super(service);
  }
}
