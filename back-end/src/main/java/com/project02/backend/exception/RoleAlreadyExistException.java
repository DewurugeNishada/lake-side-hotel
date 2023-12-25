package com.project02.backend.exception;

public class RoleAlreadyExistException extends RuntimeException{
    public RoleAlreadyExistException(String message) {
        super(message);
    }
}
