import React, { useState }from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import { FaCopy } from "react-icons/fa";
import toast from "react-hot-toast";
// import img from "../../assets/images/media/OIP.jpg";

export default function ReferAndEarn() {
  // const [referralCode, setReferralCode] = useState("AYUXH21XA");
  // const [earnedReward, setEarnedReward] = useState(0); // Default value
  // const [referredFriends, setReferredFriends] = useState(0); // Default value

  // Function to handle copying the referral code
  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(referralCode);
  //   toast.success("Referral code copied!");
  // };

  const [userImage, setUserImage] = useState(null);
  const [friendImage, setFriendImage] = useState(null);
  const [rewardAmount, setRewardAmount] = useState(50); // Default reward amount
  const [rewardAmounts, setRewardAmounts] = useState(20); // Default reward amount

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUploader = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFriendImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle reward amount change on friend first signup
  const handleRewardChange = (e) => {
    const inputValue = e.target.value.replace(/[^\d]/g, ""); // Allow only numbers
    setRewardAmount(inputValue ? parseInt(inputValue, 10) : "");
  };

  // Function to handle reward amount change on friend signup
  const handleRewardChanges = (e) => {
    const inputValue = e.target.value.replace(/[^\d]/g, ""); // Allow only numbers
    setRewardAmounts(inputValue ? parseInt(inputValue, 10) : "");
  };

  return (
    <div className="refer-and-earn-page">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4">
            <Row>
              <Col md={6} className="text-center">
                <h5>You Get</h5>
                <br/>
                <img
                  src={userImage} // Default placeholder
                  alt=""
                  className="mb-3"
                  style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                />
                <Form.Group className="mb-3">
                  <Form.Label>Upload Image</Form.Label>
                  <Form.Control type="file" onChange={handleImageUpload} />
                </Form.Group>
                <br/>
                <p className="mb-1">
                    <Form.Group>
                      <Form.Label>Reward Amount</Form.Label>
                      <Form.Control
                        type="text"
                        value={`$${rewardAmount}`}
                        onChange={handleRewardChange}
                        className="text-center border-warning bg-light"
                      />
                    </Form.Group>
                </p>
                <p>On your friend's 1st sign up</p>
              </Col>
              <Col md={6} className="text-center">
              <h5>Friends Get</h5>
              <br/>
                <img
                  src={friendImage} // Default placeholder
                  alt=""
                  className="mb-3"
                  style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                />
                <Form.Group className="mb-3">
                  <Form.Label>Upload Image</Form.Label>
                  <Form.Control type="file" onChange={handleImageUploader} />
                </Form.Group>
                <br/>
                <p className="mb-1">
                  <Form.Group>
                    <Form.Label>Reward Amount</Form.Label>
                    <Form.Control
                      type="text"
                      value={`$${rewardAmounts}`}
                      onChange={handleRewardChanges}
                      className="text-center border-warning bg-light"
                      // style={{ width: "7rem", fontSize: "12px", alignItems:"center", justifyContent: "center" }}
                    />
                  </Form.Group>
                  {/* <strong>${rewardAmount} Reward</strong> */}
                </p>
                <p>When they sign up</p>
              </Col>
            </Row>
            <hr />
            {/* <Row className="justify-content-center">
              <Col md={6} className="text-center">
                <Form.Group>
                  <Form.Label>Set Reward Amount</Form.Label>
                  <Form.Control
                    type="text"
                    value={`$${rewardAmount}`}
                    onChange={handleRewardChange}
                    className="text-center border-warning bg-light"
                  />
                </Form.Group>
              </Col>
            </Row> */}
            {/* <div className="text-center my-3">
              <h6>Invite Code</h6>
              <p>Share the code and give your friends. Let's make Konnections together! 💪</p>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <Form.Control
                  type="text"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)} // Update referral code on input change
                  className="text-center border-warning bg-light w-50"
                  // style={{ cursor: "pointer" }}
                  // onClick={copyToClipboard}
                />
                <Button
                  variant="outline-warning"
                  onClick={copyToClipboard}
                  className="ms-2"
                >
                  <FaCopy />
                </Button>
              </div>
            </div>
            <Row>
              <Col md={6} className="text-center">
                <Card className="p-3 bg-light">
                  <h6>
                    <Form.Control
                      type="text"
                      value={`$${earnedReward}`}
                      onChange={(e) => {
                        const inputValue = e.target.value.replace(/^\$/, ""); // Remove the $ if it exists
                        const parsedValue = parseFloat(inputValue); // Parse to a float
                        if (!isNaN(parsedValue)) {
                          setEarnedReward(parsedValue); // Update state if input is valid
                        }
                      }} // Update earnedReward dynamically
                      className="text-center border-warning bg-light"
                    />
                  </h6>
                  <p>You earned through referral</p>
                </Card>
              </Col>
              <Col md={6} className="text-center">
                <Card className="p-3 bg-light">
                  <h6>
                    <Form.Control
                      type="number"
                      value={referredFriends}
                      onChange={(e) => setReferredFriends(Number(e.target.value))} // Update referredFriends dynamically
                      className="text-center border-warning bg-light"
                    />
                  </h6>
                  <p>Friends you referred</p> */}
                {/* </Card>
              </Col>
            </Row> */}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
