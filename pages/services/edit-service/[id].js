import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import { useDispatch, useSelector } from "react-redux";
import AddServiceForm from "@/components/Forms/FormLayouts/AddServiceForm";

export default function EditServicePage() {
  const router = useRouter();
  const { service } = useSelector((state) => state.service);

  const [serviceData, setServiceData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (router.query.id) {
      const myService = service.data.find(
        (data) => data.id === router.query.id
      );
      console.log(myService, "myservice");
      if (myService) {
        setServiceData(myService);
        setIsLoading(false);
      } else router.push("/services");
    }
  }, [router.query.id, router, service.data]);
  return (
    <>
      <div className={styles.pageTitle}>
        <h1>Edit Service</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Manager</li>
        </ul>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <AddServiceForm formData={serviceData} isEditMode={true} />
      )}
    </>
  );
}
