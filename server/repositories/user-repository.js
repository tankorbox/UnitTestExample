'use strict';

import BaseRepository from "./base-repository";
import {User} from '../models/index';

export default class UserRepository extends BaseRepository {
	constructor() {
		super(User)
	}
}