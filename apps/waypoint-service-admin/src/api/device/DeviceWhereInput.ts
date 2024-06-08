import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DeviceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: "Option1";
};
