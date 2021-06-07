import shortid from "shortid";
import debug from "debug";

const log: debug.IDebugger = debug("app:in-memory-dao");

import { CreateUserDto } from "../dto/create.user.dto";
import { PatchUserDto } from "../dto/patch.user.dto";
import { PutUserDto } from "../dto/put.user.dto";

class UsersDao {
  users: Array<CreateUserDto> = [];

  constructor() {
    log("Created new instance of UsersDao");
  }
}

export default new UsersDao();
