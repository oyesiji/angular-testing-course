import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe('CalculatorService', () => {
    let calculator: CalculatorService;
    let loggerSpy: any;
    
    beforeEach(()=>{
        console.log("Calling each");
        loggerSpy = jasmine.createSpyObj('LoggerService',["log"]);
        TestBed.configureTestingModule({
            providers : [
                CalculatorService,
                {provide: LoggerService, useValue:loggerSpy}
            ]
        });


        calculator = TestBed.inject(CalculatorService);
    });


    it('should add two numbers', ()=>{
       console.log("Calling add");
       const result = calculator.add(2,2);
       expect(result).toBe(4);
       expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });


    it('should substract two numbers', ()=>{
        console.log("Calling substract");
        const calculator = new CalculatorService(new LoggerService());
        const result = calculator.subtract(10,5);
        expect(result).toBe(5);
    });

});