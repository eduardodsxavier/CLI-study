package com.example.shell;

import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

@ShellComponent
public class commands {
    @ShellMethod
    public String hello(String name) {
        return "hello " + name;
    }

    @ShellMethod
    public String goodbye(String name) {
        return "goodbye " + name;
    }
}
