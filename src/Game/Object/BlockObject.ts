import GameObject from "./GameObject"
import EObjectType from "./EObjectType";
import { Guid } from "../../Utils/Utils";
import { Point } from "../../Utils/UnitTypes";
import Game from "../Game";


export default class BlockObject extends GameObject {
	private _blockState: Array<Array<boolean>>;

	constructor(game: Game, position: Point) {
		super(game, EObjectType.BLOCK, position, Guid.newGuid());
		this._blockState = [
			[]
		]
	}

	
}