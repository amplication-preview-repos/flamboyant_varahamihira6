import * as graphql from "@nestjs/graphql";
import { WaypointResolverBase } from "./base/waypoint.resolver.base";
import { Waypoint } from "./base/Waypoint";
import { WaypointService } from "./waypoint.service";

@graphql.Resolver(() => Waypoint)
export class WaypointResolver extends WaypointResolverBase {
  constructor(protected readonly service: WaypointService) {
    super(service);
  }
}
