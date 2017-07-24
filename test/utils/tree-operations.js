import expect from 'expect'
import treeOperations from './../../src/_utils/tree-operations';

let base = {
	"0": {
		"id": 0,
		"parent_id": 0,
		"elementType": "VIEW",
		"style": {
			"display": "flex",
			"order": 1,
			"flex": 1,
			"flexDirection": "column",
			"width": "360px",
			"alignItems": "stretch",
			"justifyContent": "flex-start"
		},
		"selected": false,
		"data": {},
		"childIds": [
			1,
			2
		]
	},
	"1": {
		"id": 1,
		"parent_id": 0,
		"elementType": "TEXT",
		"style": {
			"order": 1,
			"fontSize": "20px",
			"textAlign": "center",
			"padding": "10",
			"fontWeight": "bold",
			"fontFamily": "Heebo",
			"backgroundColor": "#e6665d",
			"color": "#fff"
		},
		"selected": false,
		"data": {
			"text": "ספר המתכונים של משפחת לוי"
		},
		"childIds": []
	},
	"2": {
		"id": 2,
		"parent_id": 0,
		"elementType": "TEXT",
		"style": {
			"order": 2,
			"textAlign": "center",
			"color": "#333333",
			"flexDirection": "row",
			"justifyContent": "flex-end",
			"backgroundColor": "#fff",
			"height": "100px",
			"alignItems": "center",
			"display": "flex"
		},
		"selected": false,
		"data": {},
		"childIds": [
			3,
			4,
			5
		]
	},
	"3": {
		"id": 3,
		"parent_id": 2,
		"elementType": "IMAGE",
		"style": {
			"order": 3,
			"backgroundImage": "url(http://files.parsetfss.com/00da6fd8-205f-48f9-9641-bf1a19eb8070/tfss-a5d021bf-a90a-42e9-838b-579ad8b81296-image.png)",
			"backgroundSize": "cover",
			"width": "38px",
			"height": "38px",
			"marginLeft": "10px"
		},
		"selected": false,
		"data": {},
		"childIds": []
	},
	"4": {
		"id": 4,
		"parent_id": 2,
		"elementType": "IMAGE",
		"style": {
			"order": 1,
			"backgroundImage": "url(http://meatlessmonday.co.il/wp-content/uploads/2013/05/%D7%A1%D7%9C%D7%98-%…A8%D7%A4%D7%AA%D7%99-%D7%9C%D7%9C%D7%90-%D7%9E%D7%99%D7%95%D7%A0%D7%96.jpg)",
			"backgroundSize": "cover",
			"width": "80px",
			"height": "80px",
			"marginRight": "5px"
		},
		"selected": false,
		"data": {},
		"childIds": []
	},
	"5": {
		"id": 5,
		"parent_id": 2,
		"elementType": "VIEW",
		"style": {
			"order": 2,
			"flex": 1,
			"flexDirection": "column",
			"textAlign": "right",
			"color": "#333333",
			"paddingRight": "10px"
		},
		"selected": false,
		"data": {},
		"childIds": [
			6,
			7
		]
	},
	"6": {
		"id": 6,
		"parent_id": 5,
		"elementType": "VIEW",
		"style": {
			"order": 1,
			"textAlign": "right",
			"color": "#333333",
			"fontSize": "20px",
			"fontWeight": "bold",
			"fontFamily": "Heebo"
		},
		"selected": false,
		"data": {
			"text": "סלט תפו״א של סבתא רבקה"
		},
		"childIds": []
	},
	"7": {
		"id": 7,
		"parent_id": 5,
		"elementType": "VIEW",
		"style": {
			"order": 2,
			"fontSize": "18px",
			"textAlign": "right",
			"color": "#333333",
			"fontFamily": "Heebo"
		},
		"selected": false,
		"data": {
			"text": "35 דקות הכנה | רמת קושי בינונית"
		},
		"childIds": []
	}
};
let shortBase = {
	"3": {
		"id": 3,
		"parent_id": 2,
		"elementType": "IMAGE",
		"style": {
			"order": 3,
			"backgroundImage": "url(http://files.parsetfss.com/00da6fd8-205f-48f9-9641-bf1a19eb8070/tfss-a5d021bf-a90a-42e9-838b-579ad8b81296-image.png)",
			"backgroundSize": "cover",
			"width": "38px",
			"height": "38px",
			"marginLeft": "10px"
		},
		"selected": false,
		"data": {},
		"childIds": []
	},
	"4": {
		"id": 4,
		"parent_id": 2,
		"elementType": "IMAGE",
		"style": {
			"order": 1,
			"backgroundImage": "url(http://meatlessmonday.co.il/wp-content/uploads/2013/05/%D7%A1%D7%9C%D7%98-%…A8%D7%A4%D7%AA%D7%99-%D7%9C%D7%9C%D7%90-%D7%9E%D7%99%D7%95%D7%A0%D7%96.jpg)",
			"backgroundSize": "cover",
			"width": "80px",
			"height": "80px",
			"marginRight": "5px"
		},
		"selected": false,
		"data": {},
		"childIds": []
	},
	"5": {
		"id": 5,
		"parent_id": 2,
		"elementType": "VIEW",
		"style": {
			"order": 2,
			"flex": 1,
			"flexDirection": "column",
			"textAlign": "right",
			"color": "#333333",
			"paddingRight": "10px"
		},
		"selected": false,
		"data": {},
		"childIds": [
			6,
			7
		]
	}
};


describe('tree operations', function () {
    let state;
    
	it('should return order of sibling with Max Order', function () {

		state = shortBase;

		expect(
			treeOperations.findMaxOrder(state)
		).toEqual(3)
	});

	it('should return order of sibling with Min Order', function () {

		state = shortBase;

		expect(
			treeOperations.findMinOrder(state)
		).toEqual(1)
	});

	it('should return sibling with order lower than value', function () {

		state =shortBase;

		expect(
			treeOperations.findOrderLowerThan(state, 3)
		).toEqual(shortBase[5])
	});

	it('should return sibling with order higher than value', function () {

		state =shortBase;

		expect(
			treeOperations.findOrderGreaterThan(state, 2)
		).toEqual(shortBase[3])
	});


	it('should return sibling with order higher than value', function () {

		state = base;

		expect(
			treeOperations.findMaxOrderForParentId(state, 2)
		).toEqual(3)
	});

	it('should return item for ID', function () {

		state = base;

		expect(
			treeOperations.getItem(state, 2)
		).toEqual(base[2])
	});

	it('should return children for ID', function () {

		state = base;


		expect(
			treeOperations.getChildren(state, 2)
		).toEqual(shortBase)
	});


	it('should return siblings for ID', function () {

		state = base;

		expect(
			treeOperations.getSiblings(state, 3)
		).toEqual(shortBase)
	});

	it('should return element above element in order', function () {

		state = {
			elements: {
				present: base
			}
		};

		expect(
			treeOperations.aboveItem(state, 3)
		).toEqual(base[5])
	});

	it('should return element below element in order', function () {

		state = {
			elements: {
				present: base
			}
		};

		expect(
			treeOperations.aboveItem(state, 5)
		).toEqual( base[4])
	});

	it('should return the first child of element', function () {

		state = {
			elements: {
				present: base
			}
		};

		expect(
			treeOperations.firstChild(state, 2)
		).toEqual(base[3])
	});

	it('should return all sub-elements', function () {

		state = {
			elements: {
				present: base
			}
		};

		expect(
			treeOperations.treeElements(state, 2)
		).toEqual({
			2: base[2],
			5: base[5],
			7: base[7],
			6: base[6],
			4: base[4],
			3: base[3],
		});
	});

	it('should return all sub-element ids', function () {

		state = {
			elements: {
				present: base
			}
		};

		expect(
			treeOperations.treeElementIds(state, 2)
		).toEqual([ '2', '3', '4', '5', '6', '7' ]);
	});
});