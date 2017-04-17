package com.spacecadet.psychspace.controller;

import com.spacecadet.psychspace.dataManager.HelperManager;
import com.spacecadet.psychspace.dataManager.UserManager;
import com.spacecadet.psychspace.utilities.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by aliao on 3/27/2017.
 */
@Controller
public class CatalogController {

    private HelperManager helper = new HelperManager();
    private UserManager userManager = new UserManager();

    /**
     * all visit to catalog page
     * @return
     */
    @RequestMapping(value = "/catalogue", method = RequestMethod.GET)
    public ModelAndView catalog() {
        ModelAndView model = new ModelAndView();
        model.setViewName("catalogue");

        return model;
    }

    @RequestMapping(value = "/catalogue", method = RequestMethod.POST)
    public String afterRegister(@RequestBody String user, HttpServletRequest request){
        User user1 = (User)(helper.stringToJson(user, "User"));
        user1 = userManager.emailRegistered(user1.getEmail());
        if (user1 == null) {
            user1 = userManager.addUser(user1, "User");
        }
        return "catalogue";
    }
}
