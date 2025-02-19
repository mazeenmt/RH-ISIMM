package org.horizon.gestionrh.service;
import com.sendgrid.Response;
import com.sendgrid.Request;
import com.sendgrid.Method;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Email;
import com.sendgrid.helpers.mail.objects.Content;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class EmailService {

    private String sendGridApiKey = System.getenv("SENDGRID_API_KEY");

    public void sendEmail(String to, String subject, String content) throws IOException {
        Email from = new Email("mazentoraa2@gmail.com");
        Email recipient = new Email(to);
        Content emailContent = new Content("text/html", content);
        Mail mail = new Mail(from, subject, recipient, emailContent);
        SendGrid sg = new SendGrid(sendGridApiKey);
        Request request = new Request();
        request.setMethod(Method.POST);
        request.setEndpoint("mail/send");
        request.setBody(mail.build());

        Response response = sg.api(request);

        // Print response for debugging
        System.out.println("Response Status Code: " + response.getStatusCode());
        System.out.println("Response Body: " + response.getBody());
        System.out.println("Response Headers: " + response.getHeaders());
    }
}
