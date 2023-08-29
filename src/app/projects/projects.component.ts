import { Component, OnInit } from '@angular/core';
import * as onnx from 'onnxjs';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  model: any;
  result!: number; // result of the addition prediction
  number1!: number; // first number to add
  number2!: number; // second number to add

  constructor() { }
  async ngOnInit() {
    this.model = await this.loadModel('assets/addition_model_final.onnx');
  }

  // create loadModel function
  async loadModel(path:string){
    const session = new onnx.InferenceSession(); // create new session
    await session.loadModel(path); // load the ONNX model file
    return session;
  }

  async predict(number1: number, number2: number) {
    const inputTensor = new onnx.Tensor([number1, number2], 'float32', [1, 2]);
    const outputMap = await this.model.run([inputTensor]);
    const outputData = outputMap.values().next().value.data;
    this.result = outputData[0];
  }
}
