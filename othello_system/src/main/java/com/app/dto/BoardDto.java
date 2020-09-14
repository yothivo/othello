package com.app.dto;

import java.io.Serializable;

import lombok.Data;

@Data
public class BoardDto implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private int board[][];

}
