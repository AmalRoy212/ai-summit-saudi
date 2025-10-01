import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Checkbox,
  message,
  Spin,
} from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { validateEmail } from "@/utils/emailValidator";
import sendNotificationMail from "@/utils/emailjs";

const { Option } = Select;

type SponsorFormValues = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  companyName: string;
  email: string;
  mobileNumber: string;
  interestedIn: string;
  consent: boolean;
  terms: boolean;
};

const SponsorEnquiryForm: React.FC = () => {
  const [form] = Form.useForm(); // Ant Design's useForm hook
  const [loading, setLoading] = useState<boolean>(false);

  // Handle form submission using fetch API
  const onFinish = async (values: SponsorFormValues) => {
    const emailParams = {
      firstName: values.firstName,
      email: values.email,
      type: "Sponsors",
      link: "https://docs.google.com/spreadsheets/d/11JRCjubmZuv0jinMG-yFG-gnjxPU28J1Bz5Py3nWWO4/edit?gid=0#gid=0",
    };
    try {
      const response = await fetch("/api/sponsors/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // await sendNotificationMail(emailParams);

      if (response.ok) {
        message.success("Form submitted successfully!");
        form.resetFields(); // Clear the form after submission
      } else {
        message.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Error occurred during submission.");
    }
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  return (
    <div
      className="flex justify-center items-center rounded-2xl md:w-2/3 w-full"
      style={{
        borderWidth: 1,
        backgroundImage: 'url("images/statics/delegate.jpg")',
      }}
    >
      <div className="p-8 rounded-lg shadow-lg w-full">
        {/* <h2 className="text-2xl font-semibold mb-6">Sponsor Registration</h2> */}
        <Form
          form={form}
          name="sponsor-enquiry"
          layout="vertical"
          onFinish={onFinish}
          validateMessages={validateMessages}
          className="space-y-4"
        >
          <div className="flex flex-col md:flex-row w-full md:gap-2">
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "First name is required" }]}
              className="md:w-1/2 font-bold"
            >
              <Input className="h-[40px]" />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              className="md:w-1/2 font-bold"
              rules={[{ required: true, message: "Last name is required" }]}
            >
              <Input className="h-[40px]" />
            </Form.Item>
          </div>

          <div className="flex flex-col md:flex-row w-full md:gap-2">
            <Form.Item
              label="Job Title"
              name="jobTitle"
              className="md:w-1/2 font-bold"
              rules={[{ required: true, message: "Job title is required" }]}
            >
              <Input className="h-[40px]" />
            </Form.Item>

            <Form.Item
              label="Company Name"
              name="companyName"
              className="md:w-1/2 font-bold"
              rules={[{ required: true, message: "Company name is required" }]}
            >
              <Input className="h-[40px]" />
            </Form.Item>
          </div>

          <div className="flex flex-col md:flex-row w-full md:gap-2">
            <Form.Item
              className="md:w-1/2 font-bold"
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
                {
                  validator: (_, value) => {
                    const validationResult = validateEmail(value); // Call validateEmail
                    if (validationResult) {
                      return Promise.reject(new Error(validationResult)); // If there is an error message, reject the promise
                    }
                    return Promise.resolve(); // Otherwise, resolve the promise
                  },
                },
              ]}
            >
              <Input className="h-[40px]" />
            </Form.Item>

            {/* <Form.Item
              label="Mobile Number"
              name="mobileNumber"
              className="md:w-1/2 font-bold "
              rules={[{ required: true, message: "Mobile number is required" }]}
            >
              <Input
                placeholder="Mobile Number"
                className="h-[40px]"
                // addonBefore={
                //   <Select defaultValue="US">
                //     <Option value="US">+1</Option>
                //     <Option value="UK">+44</Option>
                //     <Option value="IN">+91</Option>
                //   </Select>
                // }
              />
            </Form.Item> */}
            <Form.Item
              className="md:w-1/2 font-bold"
              label="Mobile"
              name="mobile"
              rules={[
                { required: true, message: "Please input your mobile number!" },
                {
                  validator: (_, value) => {
                    if (!value || /^[0-9]*$/.test(value)) {
                      return Promise.resolve(); // valid input, resolve the promise
                    }
                    return Promise.reject(
                      new Error("Mobile number must contain only numbers!")
                    );
                  },
                },
              ]}
            >
              <Input
                className="h-[40px]"
                onChange={(e) => {
                  const { value } = e.target;
                  if (!/^[0-9]*$/.test(value)) {
                    e.target.value = value.replace(/\D/g, ""); // Remove any non-digit characters
                  }
                }}
              />
            </Form.Item>
          </div>

          <Form.Item
            label="I'm interested in"
            name="interestedIn"
            className="md:w-1/2 font-bold"
            rules={[{ required: true, message: "Please select an option" }]}
          >
            <Radio.Group className="flex flex-col gap-2">
              <Radio value="Speaking Opportunity">Speaking Opportunity</Radio>
              <Radio value="Exhibition Space">Exhibition Space</Radio>
              <Radio value="1:1 Meetings">1:1 Meetings</Radio>
              <Radio value="Delegate List">Delegate List</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="consent"
            valuePropName="checked"
            className="font-bold"
            rules={[
              {
                required: true,
                message: "Please provide consent to share your details",
              },
            ]}
          >
            <Checkbox>
              I consent to my contact details being shared with the event's
              sponsors and partners. I understand that I may be contacted via
              email, phone call, or WhatsApp by Capstone or its affiliates for
              follow-up on my inquiry.
            </Checkbox>
          </Form.Item>

          <Form.Item
            name="terms"
            valuePropName="checked"
            className="font-bold"
            rules={[{ required: true, message: "You must accept the terms" }]}
          >
            <Checkbox>
              I agree to the{" "}
              <a className="text-blue-800" href="/terms-conditions">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a className="text-blue-800" href="/privacy-policy">
                Privacy Policy
              </a>{" "}
              .
            </Checkbox>
          </Form.Item>

          <Form.Item className="w-full flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 px-20 mt-10"
              disabled={loading}
            >
              {loading ? (
                <Spin
                  indicator={<LoadingOutlined spin style={{ color: "red" }} />}
                  size="small"
                />
              ) : (
                "Submit"
              )}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SponsorEnquiryForm;
