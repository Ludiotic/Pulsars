var speed = 6.0;
var rotateSpeed = 1;
var bulletPrefab:Transform;

function Update () {

	var controller : CharacterController = GetComponent(CharacterController);
	
	// Rotate around Y - Axis
	
	rotationSpeed_x = -((Input.mousePosition.x/Screen.width) - 0.5) * 10;
	rotationSpeed_y = -((Input.mousePosition.y/Screen.height) - 0.5) * 10;
	//rotationSpeed_x = ((Screen.width/2) - Input.mousePosition.x);
	//rotationSpeed_y = ((Screen.height/2) - Input.mousePosition.y);
	
	transform.Rotate(rotationSpeed_y, Input.GetAxis ("Horizontal") * rotateSpeed, rotationSpeed_x);
	
	Debug.Log(rotationSpeed_x);
	//Move forward / backward
	moveDirection = Vector3(0, Input.GetAxis("Vertical"), 0);
	moveDirection = transform.TransformDirection(moveDirection);
	moveDirection *= speed;
	controller.Move(moveDirection * Time.deltaTime);
	
}

@script RequireComponent(CharacterController);