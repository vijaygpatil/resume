package com.patilvijayg.resume;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {

	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@Autowired
	private JavaMailSender mailSender;
	
	@Autowired
	private SimpleMailMessage simpleMailMessage;

	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model) {
		logger.info("Welcome home!");
		model.addAttribute("emailObject", new EmailObject());
		return "home";
	}

	@RequestMapping(value = "/sendEmail", method = RequestMethod.POST)
	public String doSendEmail(@ModelAttribute("emailObject") EmailObject emailObject, Model model) {
		String recipientName = emailObject.getName();
		String recipientAddress = emailObject.getEmail();
		String phone = emailObject.getPhone();
		String message = emailObject.getMessage();
		
		simpleMailMessage.setFrom(recipientAddress);
		simpleMailMessage.setText("Name: "+recipientName +" Email: "+recipientAddress+" Phone: "+phone+" Message: "+message);
		mailSender.send(simpleMailMessage);
		return "home";
	}
}
