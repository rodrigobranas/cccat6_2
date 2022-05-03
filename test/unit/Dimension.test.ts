import Dimension from "../../src/domain/entity/Dimension";

test("Deve criar as dimensões", function () {
	const dimension = new Dimension(100, 30, 10);
	const volume = dimension.getVolume();
	expect(volume).toBe(0.03);
});
