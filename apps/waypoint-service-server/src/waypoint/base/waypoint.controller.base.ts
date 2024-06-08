/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { WaypointService } from "../waypoint.service";
import { WaypointCreateInput } from "./WaypointCreateInput";
import { Waypoint } from "./Waypoint";
import { WaypointFindManyArgs } from "./WaypointFindManyArgs";
import { WaypointWhereUniqueInput } from "./WaypointWhereUniqueInput";
import { WaypointUpdateInput } from "./WaypointUpdateInput";

export class WaypointControllerBase {
  constructor(protected readonly service: WaypointService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Waypoint })
  async createWaypoint(
    @common.Body() data: WaypointCreateInput
  ): Promise<Waypoint> {
    return await this.service.createWaypoint({
      data: data,
      select: {
        createdAt: true,
        id: true,
        latitude: true,
        longitude: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Waypoint] })
  @ApiNestedQuery(WaypointFindManyArgs)
  async waypoints(@common.Req() request: Request): Promise<Waypoint[]> {
    const args = plainToClass(WaypointFindManyArgs, request.query);
    return this.service.waypoints({
      ...args,
      select: {
        createdAt: true,
        id: true,
        latitude: true,
        longitude: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Waypoint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async waypoint(
    @common.Param() params: WaypointWhereUniqueInput
  ): Promise<Waypoint | null> {
    const result = await this.service.waypoint({
      where: params,
      select: {
        createdAt: true,
        id: true,
        latitude: true,
        longitude: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Waypoint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWaypoint(
    @common.Param() params: WaypointWhereUniqueInput,
    @common.Body() data: WaypointUpdateInput
  ): Promise<Waypoint | null> {
    try {
      return await this.service.updateWaypoint({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          latitude: true,
          longitude: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Waypoint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWaypoint(
    @common.Param() params: WaypointWhereUniqueInput
  ): Promise<Waypoint | null> {
    try {
      return await this.service.deleteWaypoint({
        where: params,
        select: {
          createdAt: true,
          id: true,
          latitude: true,
          longitude: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}