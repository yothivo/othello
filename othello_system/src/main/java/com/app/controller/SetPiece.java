package com.app.controller;

import org.springframework.http.RequestEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BoardDto;

@RestController
public class SetPiece {

	@RequestMapping(value = "othello/setPiece", method = RequestMethod.PUT)
	public RequestEntity<BoardDto> setPiece(@RequestParam int row, @RequestParam int col){
		
		
		
		return null;
	}
}
